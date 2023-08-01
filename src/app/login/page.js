'use client';

import SignupForm from "@/components/SignupForm";
import React from "react";

export default function Login() {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<h1 style={{ marginTop: "20px" }}>Signup/Login page</h1>
			<div style={{ marginTop: "20px" }}>
				<SignupForm/>
			</div>
		</div>
	)
}