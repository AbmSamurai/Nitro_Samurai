import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';


@Injectable()
export class AuthenticationService {

    loggedInWithGoogle = false;

    constructor(private afAuth: AngularFireAuth, private router: Router, private db: DatabaseService) { }

    signIn(email, password){
        let loggedIn = false;
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
            (success) => {
                loggedIn = true;
                this.router.navigate(['/dashboard']);
            }).catch(
            (err) => {
                alert(err.message);
                loggedIn = false;
                console.log(err + "does not exist")
            });
        return this.afAuth.auth.currentUser;
    }

    googlePopUp() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
            response => {
            if (response.additionalUserInfo.isNewUser) {
                // if (!this.router.url.includes('register')) {
                //     this.router.navigate(['/register']);
                // }
                alert("Error: Please Register");
                // this.router.navigate(['/dashboard']);
            } else {
                this.router.navigate(['/dashboard']);
            }

            this.loggedInWithGoogle = true;
        });
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    signUp(email, password, myName, role, team) {
        if (this.loggedInWithGoogle) {
            // this.db.createNewUser(this.afAuth.auth.currentUser.uid, role, team, this.getName());
        } else {
            this.logout();
            this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
                (success) => {
                    this.updateTable(myName, role, team);
                }).catch(
                (err) => {
                    if (err.message === 'The email address is already in use by another account.') {
                        alert(err.message);
                        // this.router.navigate(['/register']);
                    } else {
                        console.log(err.message);
                    }
                });
        }
    }

    updateTable(name, role, team) {
        console.log(name);
        this.afAuth.auth.currentUser.updateProfile({ displayName: name, photoURL: null });
        this.db.createNewUser(this.afAuth.auth.currentUser.uid, role, team,false, name);
        // this.router.navigate(['/dashboard']);
    }

    getName() {
        return this.afAuth.auth.currentUser.displayName;
    }

    currentUser(): boolean {
        if (this.afAuth.auth.currentUser === null) {
            return false;
        }
        return true;
    }

    getUID() {
        return this.afAuth.auth.currentUser.uid;
    }

}
