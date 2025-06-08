import os

def run():
    name = os.environ['INPUT_NAME']

    print('Saludando desde Docker Actions a' + name)

if __name__ == '__main__':
    run()