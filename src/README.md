## node v25.2.1

# project to learn about how prisma postgresql works with Express

# Day One

### steps

- install express
- install nodemon as dev dependency using

```
npm i nodemon --save-dev
```

# Day two

some important definations and concepts

### Transactions

- A transaction is a group of database operations that execute as one unit — either all succeed or all fail.
  **_This is called atomicity._**

### Rollbacks

- A rollback means undoing all changes made during a transaction when an error occurs.

### Concurrency

- Concurrency means multiple users or processes accessing and modifying data at the same time.

### Race Conditions

- A race condition occurs when the result depends on timing of concurrent operations.

### Cookies (Backend + Auth Perspective)

- Cookies are small pieces of data stored in the browser and sent to the server automatically with every request.

```
🔁 Cookie flow (simple)

1️⃣ Server sends cookie in response
2️⃣ Browser stores it
3️⃣ Browser sends cookie automatically on every request to same domain
```

```
res.cookie("token", jwtToken, {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
});
```

### 🍪 Can frontend add or remove cookies?

✅ YES — but not all cookies

It depends on how the cookie was created.

### 1️⃣ Frontend CAN add/remove cookies (normal cookies)

If a cookie is created without httpOnly, then JavaScript can access it.

```
### ✅ Add cookie (browser JS)
document.cookie = "theme=dark; path=/; max-age=86400";
```

```
### ✅ Remove cookie
document.cookie = "theme=dark; path=/; max-age=0";
```

✔️ Works
❌ Not secure for auth

### 2️⃣ Frontend CANNOT access HttpOnly cookies (IMPORTANT)

If cookie was created like this (backend):

```
res.cookie("token", jwt, {
  httpOnly: true,
});
```

### ❌ Frontend cannot:

- Read
- Modify
- Delete
- document.cookie // token NOT visible

### 👉 This is intentional for security

###🛡️ Why HttpOnly cookies exist
-To protect against XSS attacks.
-If JS could read auth tokens:
-Any injected script could steal them ❌

### 3️⃣ Then how do we remove HttpOnly cookies?

✅ Only the backend can do it

```
res.clearCookie("token", {
  httpOnly: true,
  path: "/",
});
```

### Frontend triggers this by calling an API:

```
await fetch("/logout", {
  method: "POST",
  credentials: "include",
});
```

### 🔁 Real-world auth flow

- Login
- Backend sets HttpOnly cookie
- Frontend cannot see it
- Authenticated request
- Browser sends cookie automatically
- Logout
- Frontend calls /logout
- Backend clears cookie

# Day three

seeding 
```
to prevent duplications in seeding
skipDuplicates: 
```

Skip seed during migration: If you are running migrations but want to skip the seed script, use 
```
npx prisma migrate dev --skip-seed. 
```

