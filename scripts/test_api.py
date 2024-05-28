import time
import json
import requests


url_base = 'http://localhost:8000/api'


def print_response(response):
    print(response.status_code)

    try:
        print(json.dumps(response.json(), indent=2))
    except Exception:
        print(response.text)



# response = requests.post(
#     url=f'{url_base}/register',
#     json={
#         'username': 'matt3511',
#         'password': 'testpass1',
#         'email': 'test@test.ca'
#     }
# )



response = requests.post(
    url=f'{url_base}/auth',
    json={
        'username': 'matt3511',
        'password': 'testpass1'
    }
)


print_response(response)
token = response.json()['token']





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








# response = requests.get(
#     url=f'{url_base}/workout_templates',
#     headers={'Authorization': f'Bearer {token}'}
# )

# print_response(response)
