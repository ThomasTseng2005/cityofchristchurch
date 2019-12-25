from flask import Flask, render_template, redirect, url_for, request, session, send_from_directory
import pyrebase
import os, sys
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


config = {
    "apiKey": "AIzaSyBGeYORjDROQCLJUeDxTURDDYN347IHH1g",
    "authDomain": "cityofchristchurch-2924c.firebaseapp.com",
    "databaseURL": "https://cityofchristchurch-2924c.firebaseio.com",
    "projectId": "cityofchristchurch-2924c",
    "storageBucket": "",
    "messagingSenderId": "1001111068161",
    "appId": "1:1001111068161:web:d8cb79731057fd3c",
    "serviceAccount": "/Users/thomasjavascript/Documents/cityofchristchurch-2924c-firebase-adminsdk-pe2b4-0a868336f5.json"
}

app = Flask(__name__)
app.secret_key = os.urandom(24)
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon-16x16.png', mimetype='image/vnd.microsoft.icon')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('unfound.html', footer=-1), 404

@app.route('/')
def home():
    return render_template("home.html", navbar=1, footer=0, overflow="true")

@app.route('/about')
def about():
    return render_template("about.html", navbar=2, footer=12, overflow="true")

@app.route('/sermons')
def sermons():
    return render_template("sermons.html", navbar=2, footer=12, overflow="true")

@app.route('/group')
def group():
    return render_template("group.html", navbar=2, footer=12, overflow="true")

@app.route('/kids')
def kids():
    return render_template("kids.html", navbar=2, footer=12, overflow="true")

@app.route('/teen')
def teen():
    return render_template("teen.html", navbar=2, footer=12, overflow="true")

@app.route('/events')
def events():
    return render_template("events.html", navbar=2, footer=-1, overflow="true")

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    note = ""
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        subject = request.form["subject"]
        body = request.form["body"]
        to_email = "church.cityofchrist2019@gmail.com"
        to_email_two = str(email)
        from_email = "info@cityofchrist.church"
        username = "info@cityofchrist.church"
        password = "jesus1225"
        main_message = 'Subject: {}\n\n{}'.format(subject, "From: " + str(name) + "\n\n" + "Email: " + str(
            email) + "\n\n" + "Body: \n" + str(body))
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = from_email
        msg['To'] = to_email
        text = ""
        html = """
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body style="">
                    <div style="padding: 1.3rem 0.7rem; background: rgb(191, 175, 141);">
                        <h1 style="color: white; margin: auto; width: 50%; text-align: center; font-weight: 300;">聯絡我們</h1>
                    </div>
                    <div style="padding: 2rem; background: #f0f0eb;">
                        <p style="color: black;">""" + name + """ 你好,</p>
                        <p style="color: black;">感謝您與我們聯絡！ 我們會盡快來回覆您。</p>
                        <p style="color: black;">如果您有需要可以傳送Email到 <a href="mailto:info@cityofchrist.church">info@cityofchrist.church</a>。 謝謝！</p>
                        <br>
                        <p style="color: black; font-weight: 500;">基督城市教會</p>
                    </div>
                </body>
            </html>
            """
        part1 = MIMEText(text, 'plain')
        part2 = MIMEText(html, 'html')
        msg.attach(part1)
        msg.attach(part2)
        try:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.ehlo()
            server.starttls()
            server.login("info.cityofchrist2019@gmail.com", "jesus1225")
            server.sendmail("info.cityofchrist2019@gmail.com", to_email, main_message.encode('utf-8'))
            server.quit()
            server = smtplib.SMTP("mail.privateemail.com", 587)
            server.ehlo()
            server.starttls()
            server.login(username, password)
            server.sendmail(from_email, to_email_two, msg.as_string(()))
            server.quit()
            note = "傳送成功！"
        except:
            note = "傳送失敗！"

    return render_template("contact.html", navbar=2, footer=12, overflow="true", note=note)

if __name__ == '__main__':
    app.run()
