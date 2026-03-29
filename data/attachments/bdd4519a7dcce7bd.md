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
          - generic [ref=e17]:
            - text: Email address
            - textbox "student@university.edu" [ref=e18]
          - generic [ref=e19]:
            - text: Password
            - textbox "••••••••" [ref=e20]
          - button "Sign in" [ref=e21]:
            - text: Sign in
            - img [ref=e22]
        - paragraph [ref=e24]:
          - text: Don't have an account?
          - link "Create one now" [ref=e25] [cursor=pointer]:
            - /url: /register
      - generic [ref=e26]:
        - img "Abstract geometric shapes" [ref=e28]
        - generic [ref=e30]:
          - heading "Your campus marketplace." [level=2] [ref=e31]
          - paragraph [ref=e32]: Buy and sell books, electronics, and stationery with fellow students. Safe, fast, and local.
  - region "Notifications (F8)":
    - list
```