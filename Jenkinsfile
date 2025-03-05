pipeline {
    agent any

    triggers {
        // Trigger the pipeline on GitHub push events
        githubPush()
    }

    environment {
        DOCKER_IMAGE = 'boulaz2002/sale_f'
        DOCKER_TAG = 'latest'
        KUBE_CONFIG = credentials('k8s')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Boulaz2002/sales_f.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}", ".")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Use the Docker Hub credentials stored in Jenkins
                    withCredentials([usernamePassword(
                        credentialsId: 'docker-hub-credentials', // ID of the credentials
                        usernameVariable: 'DOCKER_USERNAME',      // Environment variable for username
                        passwordVariable: 'DOCKER_PASSWORD'      // Environment variable for password
                    )]) {
                        // Log in to Docker Hub
                        sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"
                        
                        // Push the Docker image to Docker Hub
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withEnv(["KUBECONFIG=${env.KUBE_CONFIG}"]) {
                        sh "kubectl apply -f k8s/deployment.yaml"
                        sh "kubectl apply -f k8s/service.yaml"
                        // sh "kubectl apply -f kubernetes/ingress.yaml" // Optiona
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}