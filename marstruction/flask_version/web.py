import os

from flask import Flask, render_template, url_for, redirect, request


# Routes
app = Flask("Test Site")

@app.route("/", methods=["POST", "GET"])
def home():
    # if request.method == "POST":
    #     # if 'getpic' in request.form:
    #     return redirect(url_for("data"))
    # else:
    
    return render_template("flask_index.html")

if __name__ == "__main__":
    app.run(debug=True)


