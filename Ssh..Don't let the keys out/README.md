- So much discussion about SSH and GitHub authentication. And Public stuff. What is it?
- SSH uses a client-server architecture, meaning the server runs SSH as a service daemon which is always online and waiting to receive connections, and the user runs an SSH client to make a connection to it.
- This type of system is configured to use public-private key pairs for authentication. On the server, a copy of the user's public key is stored. The user's private key is stored locally on their laptop.
- Public Private Key pairs? Cryptography is back. We have a .pub file with some ssh-rsa stuff. Google how to work with such files.
- [Here's](https://blog.oddbit.com/post/2011-05-08-converting-openssh-public-keys/) a post on how to generate a ceritificate using the pub file.
- This certificate can be used to interpret the modulus N of the cryptographic system.
- [Here's](https://8gwifi.org/PemParserFunctions.jsp) a website which takes in the Privacy-Enhanced Mail(PEM) of the certificate and generates the modulus N out as a hex value.
- This hex value can be converted into int and the flag will be formed.