# 1. Erstelle ein Set mit Früchten
fruits = {"apple", "banana", "cherry", "mango", "orange"}
print("Initial fruits set:", fruits)

# 2. Überprüfe Mitgliedschaft
if "apple" in fruits:
    print("'apple' ist im Set enthalten.")
else:
    print("'apple' ist NICHT im Set enthalten.")

# 3. Elemente hinzufügen und aktualisieren
fruits.add("kiwi")
print("Nach dem Hinzufügen von kiwi:", fruits)

more_fruits = {"grape", "pineapple", "pear"}
fruits.update(more_fruits)
print("Nach update() mit more_fruits:", fruits)

# 4. Elemente entfernen
fruits.remove("banana")
print("Nach remove('banana'):", fruits)

fruits.discard("papaya")  # verursacht keinen Fehler, auch wenn Element nicht existiert
print("Nach discard('papaya'):", fruits)

popped_item = fruits.pop()
print("Mit pop() entfernt:", popped_item)
print("Set nach pop():", fruits)

fruits_copy = fruits.copy()
fruits_copy.clear()
print("Kopie nach clear():", fruits_copy)

# 5. Mengenoperationen (Set Operations)
set_a = {"apple", "mango", "grape", "watermelon"}
set_b = {"mango", "pear", "peach"}

union_set = set_a.union(set_b)
print("Union von set_a und set_b:", union_set)

intersection_set = set_a.intersection(set_b)
print("Intersection von set_a und set_b:", intersection_set)

difference_set = set_a.difference(set_b)
print("Difference von set_a und set_b:", difference_set)

symmetric_diff_set = set_a.symmetric_difference(set_b)
print("Symmetric Difference:", symmetric_diff_set)

# 6. In-Place Set-Operationen
set_c = {"apple", "banana", "cherry"}
set_d = {"banana", "kiwi"}

set_c.difference_update(set_d)
print("Nach difference_update():", set_c)

set_e = {"apple", "banana", "cherry"}
set_f = {"banana", "cherry", "date"}
set_e.intersection_update(set_f)
print("Nach intersection_update():", set_e)

set_g = {"apple", "banana"}
set_h = {"grape", "mango"}
set_g.update(set_h)
print("Nach update():", set_g)

# 7. Relationale Methoden
small_set = {1, 2}
large_set = {1, 2, 3, 4}

print("small_set ist subset von large_set?", small_set.issubset(large_set))
print("large_set ist superset von small_set?", large_set.issuperset(small_set))

set_x = {1, 2}
set_y = {3, 4}
print("set_x und set_y sind disjoint?", set_x.isdisjoint(set_y))
