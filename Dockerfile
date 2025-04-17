# Use a lightweight Python-Image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy the dependency file and install the dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Set the environment variable for Flask
ENV FLASK_APP=youtube.py

# Expose the port the app is running on
EXPOSE 5000

# Start the application
CMD ["flask", "run", "--host=0.0.0.0"]
