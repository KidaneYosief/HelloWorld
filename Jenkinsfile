pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'python --version'
            }
        }
        stage('size') {
            steps {
                sh 'du -sh *'
            }
        }
        stage('Deploy') {
            steps {
                sh 'env'
            }
        }
    }
}