from flask import Flask

app = Flask(__name__)

@app.route("/")
def server():
    return "<p>Hello</p>"

if __name__ == '__main__':
    app.run(debug=True)