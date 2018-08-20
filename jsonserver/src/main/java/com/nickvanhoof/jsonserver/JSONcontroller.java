package com.nickvanhoof.jsonserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.util.List;

@RestController
public class JSONcontroller {items.json

    @GetMapping(path = "/getItems")
    public String listUsers(){

        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource("items.json").getFile());
        String msg = StreamUtils.copyToString( new ClassPathResource("test.xml").getInputStream(), Charset.defaultCharset()  );
        return new file.toString();
    }




}
