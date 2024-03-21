import socket

ip = '172.30.0.10'
port = 8080

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

connect = client_socket.connect((ip, port))

print('Connected to server: ' + ip + ':' + str(port))

while True:
    message = input("Enter message to send (or 'quit' to exit : ")
    if message.lower() == 'quit':
        client_socket.shutdown(socket.SHUT_WR)
        break
    client_socket.sendall(message.encode())

client_socket.close()
