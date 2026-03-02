from http.server import BaseHTTPRequestHandler, HTTPServer

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        print("\n--- NEW REQUEST ---")
        print(self.requestline)
        print(self.headers)

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"OK")

    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)

        print("\n--- NEW REQUEST ---")
        print(self.requestline)
        print(self.headers)
        print(body.decode(errors="ignore"))

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"OK")

HTTPServer(("0.0.0.0", 80), Handler).serve_forever()