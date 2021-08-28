"""
本视图专门用于处理页面
"""
from flask import Blueprint, render_template

page = Blueprint('page', __name__)


@page.route('/', endpoint="index")
def login():
    return render_template("index.html")

@page.route('/huxing')
def huxing():
    return render_template("huxing.html")