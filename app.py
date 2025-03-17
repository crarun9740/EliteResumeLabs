from flask import Flask, render_template, request, abort, render_template_string, make_response, session, redirect
from functools import wraps
from flask_mysqldb import MySQL
from MySQLdb import cursors
import os
from secket_key import secret_key, GEMNI_KEY
import json
import bs4 as bs
import google.generativeai as genai
import firebase_admin
from firebase_admin import credentials, auth, firestore


cred = credentials.Certificate("./firebase_config.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)
app.secret_key = secret_key


client = genai.configure(api_key=GEMNI_KEY)


def login_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if session.get("user", None) is None:
            return redirect("/login")
        return func(*args, **kwargs)
    return wrapper


TEMPLATE_MAPPING = {
    1: "template1.html",
    2: "template2.html",
    3: "template3.html",
}


def get_improvements(resume_data: dict) -> str:
    # Read the system prompt
    with open("sysPrompt.txt", "r") as f:
        prompt = f.read()

    # Configure the Gemini API
    # Ensure GEMNI_KEY is defined properly

    # Initialize the model
    model = genai.GenerativeModel("gemini-2.0-flash")  # Use correct model name

    # Prepare input text
    input_text = prompt + "\n" + json.dumps(resume_data)

    # Generate response
    response = model.generate_content(input_text)

    # Extract AI-generated text safely
    return response.text if response else "No response from AI."


@app.route('/signup', methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        user_data = {"email": email, "password": password}
        try:
            db.collection("users").document(email).set(user_data)
            return redirect("/login")
        except Exception as e:
            return render_template("signin.html", message=str(e))
    return render_template("signin.html")


@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        user_doc = db.collection("users").document(email).get()
        if user_doc.exists and user_doc.to_dict().get("password") == password:
            session["user"] = email
            return redirect("/")
        return render_template("login.html", message="Invalid credentials")
    return render_template("login.html")


@app.route("/logout")
@login_required
def logout():
    session.pop("user")
    return redirect("/login")


@app.route('/', methods=["GET"])
@login_required
def firstpage():
    return render_template("firstpage.html")


@app.route('/secondpage', methods=["GET"])
@login_required
def secondpage():
    return render_template("secondpage.html")


@app.route('/thirdpage', methods=['GET'])
@login_required
def thirdpage():
    return render_template("thirdpage.html")


@app.route('/form/<int:id>', methods=["GET", "POST"])
@login_required
def template_handler(id):
    user_email = session["user"]
    if request.method == "GET":
        doc_ref = db.collection("resumes").document(user_email)
        doc = doc_ref.get()
        data = doc.to_dict() if doc.exists else {}
        return render_template("form.html", id=id, data=data)

    elif request.method == "POST":
        data = {key: request.form.get(key, "") for key in request.form}
        data['summary'] = get_improvements(data)
        db.collection("resumes").document(user_email).set(data)
        session['data'] = data
        return render_template(TEMPLATE_MAPPING.get(id, "error.html"), data=data, id=id)


@app.route('/form/<int:id>/download_resume', methods=['GET'])
@login_required
def download_resume(id):
    template_name = TEMPLATE_MAPPING.get(id)
    if template_name:
        data = session.get('data')
        rendered_template = render_template(template_name, data=data)
    response = make_response(rendered_template)
    response.headers['Content-Disposition'] = 'attachment;filename=template.html'
    return response


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
