import java.util.*;

public class CommonCharacters {

    public static String commonCharacters(String... strings) {
        // Handle edge cases
        if (strings == null || strings.length == 0) return "";
        if (strings.length == 1) return removeDuplicates(strings[0].replace(" ", ""));

        String first = strings[0].replace(" ", "");
        Set<Character> seen = new HashSet<>();
        StringBuilder result = new StringBuilder();

        for (char c : first.toCharArray()) {
            if (seen.contains(c)) continue; // skip duplicates in str1
            seen.add(c);

            boolean inAll = true;
            for (int i = 1; i < strings.length; i++) {
                if (!strings[i].contains(String.valueOf(c))) {
                    inAll = false;
                    break;
                }
            }

            if (inAll) result.append(c);
        }

        return result.toString();
    }

    private static String removeDuplicates(String str) {
        StringBuilder sb = new StringBuilder();
        Set<Character> seen = new HashSet<>();
        for (char c : str.toCharArray()) {
            if (!seen.contains(c)) {
                seen.add(c);
                sb.append(c);
            }
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(commonCharacters("acexivou", "aegihobu")); 
        System.out.println(commonCharacters("hello", "world"));       
        System.out.println(commonCharacters("acexivou", "aegihobu", "aeio")); // extra credit 
    }
}
