package com.praveen.SpringBootWeb;

import org.apache.catalina.startup.Tomcat;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootWebApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringBootWebApplication.class, args);
		Tomcat tomcat=new Tomcat();
		tomcat.setPort(8088);
	}

}
