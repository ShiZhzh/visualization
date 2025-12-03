from flask import Flask, send_from_directory
import os
import socket

# 初始化 Flask 应用
# static_folder='.' 表示将当前目录作为静态文件目录
# static_url_path='' 表示静态文件不需要 /static/ 前缀，直接通过根路径访问
app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    # 访问根路径时返回 main.html
    return send_from_directory('.', 'main.html')

if __name__ == '__main__':
    port = 5000
    
    # 获取本机 IP 地址以便显示
    hostname = socket.gethostname()
    try:
        ip_address = socket.gethostbyname(hostname)
    except:
        ip_address = "0.0.0.0"

    print(f"Server is running locally at: http://127.0.0.1:{port}")
    print(f"Server is accessible from other hosts at: http://{ip_address}:{port}")
    
    # host='0.0.0.0' 允许局域网内其他主机访问
    app.run(host='0.0.0.0', port=port, debug=True)
