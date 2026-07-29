package com.cognizant.jwt_auth_service.controller;

import org.springframework.web.bind.annotation.*;

import com.cognizant.jwt_auth_service.model.AuthenticationRequest;
import com.cognizant.jwt_auth_service.security.JwtUtil;

@RestController
public class AuthenticationController {

    @PostMapping("/authenticate")
    public String authenticate(
            @RequestBody AuthenticationRequest request) {

        if ("user".equals(request.getUsername())
                && "pwd".equals(request.getPassword())) {

            return JwtUtil.generateToken(request.getUsername());
        }

        return "Invalid Credentials";
    }
}