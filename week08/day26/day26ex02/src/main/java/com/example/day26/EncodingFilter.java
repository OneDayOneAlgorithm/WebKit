package com.example.day26;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter("/*")
public class EncodingFilter implements Filter {

    private String encoding;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 웹.xml에서 설정한 인코딩 값을 가져옴
        encoding = filterConfig.getInitParameter("encoding");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // 요청 및 응답의 인코딩 설정
        request.setCharacterEncoding(encoding);
        response.setCharacterEncoding(encoding);

        // 다음 필터 또는 서블릿 호출
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        // 필터 종료 시 수행할 작업
    }
}

