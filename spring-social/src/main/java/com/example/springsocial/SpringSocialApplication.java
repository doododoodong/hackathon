package com.example.springsocial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.example.springsocial.config.AppProperties;
import com.example.springsocial.config.ClientProperties;

@SpringBootApplication
@EnableConfigurationProperties(value = { AppProperties.class, ClientProperties.class })
public class SpringSocialApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSocialApplication.class, args);
	}
}
