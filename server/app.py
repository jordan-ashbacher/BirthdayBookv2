from flask import Flask
import psycopg2
from flask import request, jsonify, make_response
from psycopg2.extras import RealDictCursor
app = Flask(__name__)


if __name__ == 'main':
    app.run(debug=True)