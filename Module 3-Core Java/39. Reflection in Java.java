import java.lang.reflect.Method;

public class ReflectionExample {

    public void show() {
        System.out.println("Reflection Method");
    }

    public static void main(String[] args) throws Exception {

        Class<?> c =
                Class.forName("ReflectionExample");

        Object obj =
                c.getDeclaredConstructor().newInstance();

        Method[] methods = c.getDeclaredMethods();

        for (Method m : methods) {
            System.out.println(m.getName());
        }

        Method method = c.getMethod("show");
        method.invoke(obj);
    }
}
