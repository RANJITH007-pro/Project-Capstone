# Page snapshot

```yaml
- generic [ref=e2]:
  - main [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - img [ref=e10]
          - heading "Welcome back" [level=1] [ref=e14]
          - paragraph [ref=e15]: Enter your credentials to access your account
        - generic [ref=e16]:
          - generic [ref=e17]: Invalid credentials
          - generic [ref=e18]:
            - text: Email address
            - textbox "student@university.edu" [ref=e19]: test@example.com
          - generic [ref=e20]:
            - text: Password
            - textbox "••••••••" [ref=e21]: Password123
          - button "Sign in" [ref=e22]:
            - text: Sign in
            - img [ref=e23]
        - paragraph [ref=e25]:
          - text: Don't have an account?
          - link "Create one now" [ref=e26]:
            - /url: /register
      - generic [ref=e27]:
        - img "Abstract geometric shapes" [ref=e29]
        - generic [ref=e31]:
          - heading "Your campus marketplace." [level=2] [ref=e32]
          - paragraph [ref=e33]: Buy and sell books, electronics, and stationery with fellow students. Safe, fast, and local.
  - region "Notifications (F8)":
    - list
```