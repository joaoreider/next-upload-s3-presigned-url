## S3 POLICIES:


```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<BUCKET_NAME>/*"
        }
    ]
}
```

## CORS SETUP:

```
[
    {
        "AllowedHeaders": [*],
        "AllowedMethods": ["PUT", "GET"],
        "AllowedOrigins": ["localhost:3000"], //Your producition URL here
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]
```