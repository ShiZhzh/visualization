import socket

from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():

    return send_from_directory('.', 'main.html')

if __name__ == '__main__':
    port = 5000
    
    hostname = socket.gethostname()
    try:
        ip_address = socket.gethostbyname(hostname)
    except:
        ip_address = "0.0.0.0"

    print(f"Server is running locally at: http://127.0.0.1:{port}")
    print(f"Server is accessible from other hosts at: http://{ip_address}:{port}")
    

    app.run(host='0.0.0.0', port=port, debug=True)
