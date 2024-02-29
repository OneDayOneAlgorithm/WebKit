package org.comstudy.myweb.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.comstudy.myweb.dbcp.JdbcUtil;
import org.h2.command.ddl.PrepareProcedure;

public class CarDAO {
	
	Connection conn;
	Statement stmt;
	// PreparedStatement는 Statement를 상속 받았다.
	PreparedStatement pstmt;
	ResultSet rs;
	
	public List<CarDTO> selectAll() {
		List<CarDTO> list = new ArrayList<CarDTO>();
		
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.createStatement();
			rs = stmt.executeQuery("SELECT * FROM CAR");
			while(rs.next()) {
				int no = rs.getInt(1);
				String name = rs.getString(2);
				String company = rs.getString(3);
				int price = rs.getInt(4);
				int yeonsik = rs.getInt(5);
				CarDTO newCar = new CarDTO(no, name, company, price, yeonsik);
				list.add(newCar);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if(rs != null) {rs.close();}
				if(stmt != null) {stmt.close();}
				if(conn != null) {conn.close();}
			} catch (SQLException e) {}
		}
		
		return list;
	}
	
	// detail, update 기능에서 필요
	public CarDTO selectOne(CarDTO dto) {
		CarDTO car = null;
		
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.createStatement();
			rs = stmt.executeQuery("SELECT * FROM CAR");
			if(rs.next()) {
				int no = rs.getInt(1);
				String name = rs.getString(2);
				String company = rs.getString(3);
				int price = rs.getInt(4);
				int yeonsik = rs.getInt(5);
				car = new CarDTO(no, name, company, price, yeonsik);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return car;
	}
	
	// 입력 기능
	// 변수 사용해한다. 문자열을 빈번하게 수정한다.
	// 1. Strong.format()을 사용하는 해결책
	// 2. PreparedStatement를 이용하는 해결책
	public void insert(CarDTO dto) {
		String sql_insert = "insert into car (name, company, price, yeonsik) values (?,?,?,?)";
		try {
			conn = JdbcUtil.getConnection();
			pstmt = conn.prepareStatement(sql_insert);
			pstmt.setString(1, dto.getName());
			pstmt.setString(2, dto.getCompany());
			pstmt.setInt(3, dto.getPrice());
			pstmt.setInt(4, dto.getYear());
			System.out.println("데이터 입력 성공!");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
	}
	
	// 수정 기능
	public void update(CarDTO dto) {
		
	}
	
	// 삭제 기능
	public void delete(CarDTO dto) {
	
	}
}
