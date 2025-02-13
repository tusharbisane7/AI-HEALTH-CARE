AI-Based Virtual Health Assistant

This repository contains the code and models for our AI-powered virtual health assistant designed to provide real-time health advice, analyze medical data, and assist users with personalized medical queries. The solution integrates several key features like time series analysis using RNN, X-ray classification models, and a chatbot built with Botpress, all deployed within a web-based interface.

## Features

### 1. Real-Time Health Advice using RNN
- **Description**: This feature analyzes time-series data from wearable devices to detect health abnormalities in real time. The Recurrent Neural Network (RNN) model processes the data and sends notifications to users if any anomalies are found.
- **Files**: 
  - `rnn_model.ipynb` (RNN architecture and training scripts)
  - `synthetic_health_data.csv` (Example wearable data for time series analysis)

### 2. Hand Bone Fracture X-Ray Detection
- **Description**: A deep learning model to classify hand bone X-rays as 'fracture' or 'no fracture'. The model is trained using EfficientNet and predicts fracture presence based on X-ray images.
- **Files**:
  - `fracture_detection.py` (Code for training and predicting hand fractures)

### 3. Chest X-Ray Classification
- **Description**: This feature uses a convolutional neural network to classify chest X-rays into various disease categories. The model identifies abnormalities such as pneumonia or other common conditions.
- **Files**:
  - `chest_xray_classification.py` (Code for classifying chest X-rays)

### 4. Web Interface with Integrated Chatbot
- **Description**: The web-based interface allows users to interact with the system. It includes an integrated chatbot built using Botpress, which functions as a symptom checker and provides answers to common medical queries.
