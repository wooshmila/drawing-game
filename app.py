from flask import Flask
from flask import url_for, flash, redirect, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)