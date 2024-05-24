import json
import requests


url_base = 'http://localhost:3000'


# response = requests.post(
#     url=f'{url_base}/test',
#     json={
#       'username': 'matt3511',
#       'password': 'testpass'
#     }
# )

# response = requests.get(
#     url=f'{url_base}/exercises'
# )

response = requests.get(
    url=f'{url_base}/workout_templates'
)


print(response.status_code)
print(json.dumps(response.json(), indent=2))
