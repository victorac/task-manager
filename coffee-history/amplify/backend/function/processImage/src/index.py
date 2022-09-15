import boto3
import json
import urllib.request
import urllib.parse
import urllib.error
from io import BytesIO

rekognition = boto3.client('rekognition', region_name = "us-east-1")
# s3 = boto3.client('s3')


def handler(event, context):
    '''Demonstrates S3 trigger that uses
    Rekognition APIs to detect faces, labels and index faces in S3 Object.
    '''
    #print("Received event: " + json.dumps(event, indent=2))

    # Get the object from the event
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'])
    try:
        response=rekognition.detect_text(Image={'S3Object':{'Bucket':bucket,'Name':key}})
        textDetections=response['TextDetections']
        print ('Detected text\n----------')
        for text in textDetections:
            print ('Detected text:' + text['DetectedText'])
            print ('Confidence: ' + "{:.2f}".format(text['Confidence']) + "%")
            print ('Id: {}'.format(text['Id']))
            if 'ParentId' in text:
                print ('Parent Id: {}'.format(text['ParentId']))
            print ('Type:' + text['Type'])
            print()
        detection_json = json.dumps(textDetections)
        detection_bytes = str.encode(detection_json)
        detection_file = BytesIO(detection_bytes)
        detection_key = ".".join(key.split(".")[:-1]) + ".json"
        # s3.put_object(ACL='private', Body=detection_file, Bucket=bucket, Key=detection_key)
        return len(textDetections)
    except Exception as e:
        print(e)
        print("Error processing object {} from bucket {}. ".format(key, bucket) +
              "Make sure your object and bucket exist and your bucket is in the same region as this function.")
        raise e