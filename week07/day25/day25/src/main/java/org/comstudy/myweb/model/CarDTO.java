package org.comstudy.myweb.model;

import java.util.Objects;

public class CarDTO {
	private int no;
	private String name;
	private String company;
	private int price;
	private int year;
	
	public CarDTO() {
		this(0, "", "", 0, 0);
	}

	public CarDTO(int no, String name, String company, int price, int year) {
		this.no = no;
		this.name = name;
		this.company = company;
		this.price = price;
		this.year = year;
	}

	public CarDTO(int no) {
		this(no, "", "", 0, 0);
	}
	
	

	@Override
	public int hashCode() {
		return Objects.hash(no);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CarDTO other = (CarDTO) obj;
		return no == other.no;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	@Override
	public String toString() {
		return "{" + no + ", " 
				+ name + ", " + company + ", " 
				+ price + ", " + year
				+ "}";
	}
	
	public String makeTableRow() {
		return String.format("<tr><td>%d</td><td>%s</td><td>%s</td><td>%d</td><td>%d</td></tr>", 
				no, name, company, price, year);
	}
}
