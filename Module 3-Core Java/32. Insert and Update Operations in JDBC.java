import java.sql.*;

public class InsertUpdateJDBC {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "root";

        try {
            Connection con = DriverManager.getConnection(url, user, password);

            String insert = "INSERT INTO students(id,name) VALUES(?,?)";
            PreparedStatement ps = con.prepareStatement(insert);

            ps.setInt(1, 101);
            ps.setString(2, "Monisha");
            ps.executeUpdate();

            String update = "UPDATE students SET name=? WHERE id=?";
            PreparedStatement ps2 = con.prepareStatement(update);

            ps2.setString(1, "Monisha K");
            ps2.setInt(2, 101);
            ps2.executeUpdate();

            System.out.println("Insert and Update Successful");

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
