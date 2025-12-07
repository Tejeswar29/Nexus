pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = "teja189/nexus"
        IMAGE_TAG = "latest"
    }

    stages {

        stage("checkout code") {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Tejeswar29/Nexus.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker Image: ${env.DOCKER_HUB_REPO}:${env.IMAGE_TAG}"
                    docker.build("${env.DOCKER_HUB_REPO}:${env.IMAGE_TAG}")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    echo "Pushing image to Docker Hub..."
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image("${env.DOCKER_HUB_REPO}:${env.IMAGE_TAG}").push()
                    }
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check logs."
        }
    }
}
