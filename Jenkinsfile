#!/usr/bin/env groovy

pipeline {
    agent any

    // environment {
    //     REMOTE_ADDRESS = "REPLACE_WITH_REMOTE_ADDRESS"
    // }

    stages {
        stage('Checkout Source') {
            steps {
                git 'https://github.com/imanphung/samgw.git'
            }
        }
    
        stage('ENV Test') {
            steps {
                sh "chmod +x gradlew"
                sh "./gradlew clean --no-daemon"
                sh "./gradlew checkstyleNohttp --no-daemon"
            }
        }
    
        // stage('Backend tests') {
        //     try {
        //         sh "./gradlew test integrationTest -PnodeInstall --no-daemon"
        //     } catch(err) {
        //         throw err
        //     } finally {
        //         junit '**/build/**/TEST-*.xml'
        //     }
        // }
    
        // stage('Frontend tests') {
        //     try {
        //         sh "./gradlew npm_run_test-ci -PnodeInstall --no-daemon"
        //     } catch(err) {
        //         throw err
        //     } finally {
        //         junit '**/build/test-results/TESTS-*.xml'
        //     }
        // }
    
        // stage('Packaging') {
        //     sh "./gradlew bootJar -x test -Pprod -PnodeInstall --no-daemon"
        //     archiveArtifacts artifacts: '**/build/libs/*.jar', fingerprint: true
        // }
        // stage('Build Docker image') {
        //     sh './gradlew -Pprod bootJar jibDockerBuild'
        // }
        
        // stage('Push Docker image') {
        //     environment {
        //         DOCKER_HUB_LOGIN = credentials('docker-hub')
        //     }
        //     steps {
        //         sh 'docker login --username=$DOCKER_HUB_LOGIN_USR --password=$DOCKER_HUB_LOGIN_PSW'
        //         sh './gradlew dockerPush'
        //     }
        // }
    
        stage('Pushing Image') {
            environment {
                registryCredential = 'dockerhublogin'
            }
            steps{
                script {
                    docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
                        sh './gradlew -Pprod bootJar jib -Djib.to.image=antphungit/samgw:latest'
                    }
                }
            }
        }

        stage('Deploying Services to Kubernetes Cluster') {
            steps {
                script {
                    kubernetesDeploy(configs: "samgw-deployment.yml", kubeconfigId: "kubernetes")
                }
            }
        }
    }
}
