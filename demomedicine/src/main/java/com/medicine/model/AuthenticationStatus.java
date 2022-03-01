package com.medicine.model;

public class AuthenticationStatus {
	private String username;
	private String password;
	private boolean authenticated;
	public AuthenticationStatus() {
		super();
	}
	public AuthenticationStatus(String username, String password, boolean authenticated) {
		super();
		this.username = username;
		this.password = password;
		this.authenticated = authenticated;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isAuthenticated() {
		return authenticated;
	}
	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}
	

}
