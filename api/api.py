from flask import Flask, request, jsonify
from air_canvas import air_canvas_function
from slide_navigation import slide_navigation_function

app = Flask(__name__)

@app.route('/api/aircanvas', methods=['POST'])
def handle_air_canvas_request():
    result = air_canvas_function()
    return jsonify({"result": result})

@app.route('/api/slide-navigation', methods=['POST'])
def handle_slide_navigation_request():
    result = slide_navigation_function()
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
