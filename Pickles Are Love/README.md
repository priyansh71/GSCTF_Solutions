- We got an image with some characters written on it.Maybe it's a hash or a hexstring. Gotta see.
- Too much hints about hashtags in the question. Obviously, it' a hash.
- Hash? But how do I decrypt a hash?
- Have you ever come across most common passwords list? How do you think they're formed? Do hackers just see the passwords naked when they hack into a database? No, they see hashes.
-  Okay so it's a hash. There's some hint about googling hashtags in the question. Let's google this hash. What do we get? A webpage saying it's a SHA256 hash of the word "chernobyl".
-  Now this is cryptography question just about hashes? Doesn't seem right. Let's go to the hints. The guy says he hid something from us. He hid stuff and he gave us an image? Maybe he hid something with steghide.
- Run ```steghide extract -sf important.jpg``` .
- But what passphrase? What do we even have right now? Only "chernobyl". Use it. Ah yes, we get flag.txt.
- What now? Looks like some string which may be a flag because there are some underscores but the text doesn't make sense.
- Let's go to the question again. If you read it, all the question revolves around pickles. The guy says he want to preserve pickles. How does one preserve pickles? Let's Google it.
- Scrolling through  we see vinegar written. A cryptography question with their hint about vinegar? What cipher do we use now?
- Basic cryptography knowledge or even a Google search about vinegar cipher takes you to the classical Vingere cipher.
- But to crack it what key do I use? Let's go to the hint again. The second hint says if you have got something, use it again to get the flag. What have we got? Only "vingere" and "chernobyl". Try both.
-  Using "chernobyl" as a key again gives you the text that "v4l3ry_l3g4s0v_w4s_4_l3g3nD". Which is all you need to know given the key was chernobyl.
-  That's it.