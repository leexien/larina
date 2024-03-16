pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("larina/back:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("larina/back:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }
    }
}

