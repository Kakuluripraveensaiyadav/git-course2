package com.praveen.SpringBootWeb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.PrintWriter;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home()
    {

        System.out.println("home1 method");
        return "Home.jsp";
    }
    @RequestMapping("/home")
    public String home2()
    {
        return "Home.jsp";
    }

}
