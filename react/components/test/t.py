import os


def progress_bar(current_val, max_val, bar_width=20):
    ratio_nearest_int = current_val//max_val
    current_bar_width = ratio_nearest_int * bar_width

    bar = f"[{'#'*current_bar_width:<{bar_width}}]"

    return bar

def main():
    start = 0 
    end = 1_000

    while start <= end:
        print(progress_bar(start, end))
        start += 1

if __name__ == '__main__':
    main() 
