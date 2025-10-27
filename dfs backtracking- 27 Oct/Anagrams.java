import java.util.*;

public class Anagrams {
// backtracking
    public static List<String> allAnagrams(String s) {
        List<String> result = new ArrayList<>();
        permute("", s, result);
        return result;
    }

    private static void permute(String prefix, String remaining, List<String> result) {
        if (remaining.isEmpty()) {
            result.add(prefix);
        } else {
            Set<Character> used = new HashSet<>(); // avoid duplicate branches
            for (int i = 0; i < remaining.length(); i++) {
                char c = remaining.charAt(i);
                if (used.contains(c)) continue; // skip duplicate character
                used.add(c);
                String newPrefix = prefix + c;
                String newRemaining = remaining.substring(0, i) + remaining.substring(i + 1);
                permute(newPrefix, newRemaining, result);
            }
        }
    }// time: O(n*n!), space: O(n!)

    public static void main(String[] args) {
        List<String> anagrams = allAnagrams("aab");
        System.out.println(anagrams);
    }
}
