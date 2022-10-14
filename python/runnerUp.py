if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    score=sorted(list(set(arr)),reverse=True)
    print(score[1])