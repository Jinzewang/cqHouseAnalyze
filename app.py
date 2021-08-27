from flask import Flask

from view.data_view import data
from view.page_view import page
from config import app

app.register_blueprint(data, url_prefix="/data")
app.register_blueprint(page, url_prefix="/")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
