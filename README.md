# Countdown Timer Website

A simple and elegant countdown timer website built with Flask that displays the time remaining until a specific date and time.

## Setup

1. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

2. Install the required packages:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python app.py
```

4. Open your web browser and navigate to:
```
http://localhost:5000
```

## Customization

To change the target date and time, edit the `TARGET_DATETIME` variable in `app.py`. The datetime should be in the format "YYYY-MM-DD HH:MM:SS". For example:
```python
TARGET_DATETIME = "2024-12-31 23:59:59"
```
For celebration video put your `celebration.mp4` in the `static` folder.
Also you can set a custom background by putting your image in the `static` folder and changing the path to it in the `style.css` file.

## Technologies Used

- Flask
- Python
- HTML
- CSS
- JavaScript 