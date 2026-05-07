pipeline {
    agent none
    environment {
        DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
        DOCKER_APP_NAME = 'stage-code-wizard-ai'
    }
    stages {
        stage('My Stage') {
            agent {
                label 'my-special-agent'
            }
        stage('Checkout') {
            steps {
                // Checkout code from Git
                git credentialsId: 'github-PAT', url: 'https://github.com/reptech-platform/codewizard_ui.git', branch: 'stage'
            }
        }
        stage('copy files from s3')
            steps {
                sh "aws s3 cp s3://nginx-lets/ ."
            }
        stage('Cleanup Previous Deployment') {
            steps {
                script {
                    def previousTag = env.BUILD_NUMBER.toInteger() - 1
                    def previousImage = "${DOCKER_APP_NAME}:${previousTag}"
                    
                    // Stop and remove the previous container
                    sh "docker stop ${DOCKER_APP_NAME} || true"
                    sh "docker rm ${DOCKER_APP_NAME} || true"
                    
                    // Remove the previous image with the calculated tag
                    sh "docker rmi ${previousImage} || true"
                }
            }
        }
        stage('Build and Deploy') {
            steps {
                // Build Docker image
                sh "docker build -t ${DOCKER_APP_NAME}:${DOCKER_IMAGE_TAG} ."
                
                // Deploy Docker container with resource constraints
                sh "docker run -d \
                    --cpus='1' \
                    --memory='2g' \
                    -p 80:3000 \
                    --name ${DOCKER_APP_NAME} \
                    ${DOCKER_APP_NAME}:${DOCKER_IMAGE_TAG}"
            }
        }
    }
}
