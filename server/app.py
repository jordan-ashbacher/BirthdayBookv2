from flask import Flask
import psycopg2
from flask import request, jsonify, make_response
from psycopg2.extras import RealDictCursor
app = Flask(__name__)

conn = psycopg2.connect("dbname=birthday_book")

cur = conn.cursor(cursor_factory=RealDictCursor)

@app.route('/addBirthday', methods=['POST'])
def addBirthday():
    name = request.form.get('name')
    birthday = request.form.get('birthday')
    print('name: ', name)
    print('birthday: ', birthday)

    
    try: 
        # query = 'INSERT INTO "birthday" ("name", "birthday") VALUES (%s, %s)'
        # cur.execute(query, (name, birthday))
        # conn.commit()
        result = {'status': 'CREATED'}
        return make_response(jsonify(result), 201)
    except (Exception, psycopg2.Error) as error:
        # if(conn):
        #     print('Failed to add birthday', error)
        result = {'status': 'ERROR'}
        return make_response(jsonify(result), 500)

@app.route('/test', methods=['GET'])
def testRoute():
    print(request.form)
    try:
        result = {'status': 'OK'}
        return make_response(jsonify(result), 201)
    except (Exception, psycopg2.Error) as error:
        result = {'status': 'ERROR'}
        return make_response(jsonify(result), 500)



if __name__ == 'main':
    app.run(debug=True)