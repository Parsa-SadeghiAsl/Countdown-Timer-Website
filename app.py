from flask import Flask, render_template
from datetime import datetime
from dateutil import parser

app = Flask(__name__)

# Set your target date and time here (format: "YYYY-MM-DD HH:MM:SS")
TARGET_DATETIME = "2025-03-26 13:00:00"  # Change this to your desired date and time

@app.route('/')
def index():
    target = parser.parse(TARGET_DATETIME)
    now = datetime.now()
    time_left = target - now

    days = time_left.days
    hours = time_left.seconds // 3600
    minutes = (time_left.seconds % 3600) // 60
    seconds = time_left.seconds % 60

    return render_template('index.html',
                         days=days,
                         hours=hours,
                         minutes=minutes,
                         seconds=seconds,
                         target_datetime=TARGET_DATETIME)

if __name__ == '__main__':
    app.run(debug=False) 