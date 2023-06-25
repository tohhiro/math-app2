import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import App from "../App";

describe("componentの存在テスト", () => {
  test("ヘッダーがあるか", () => {
    render(<App />) as RenderResult;
    const header = screen.getByTestId("header");
    expect(header).toBeVisible();
    expect(header).toHaveTextContent("Math-App2");
  });
  test("+クリアボタンがあるか", () => {
    render(<App />) as RenderResult;
    const plusClearBtn = screen.getByTestId("plusClearBtn");
    expect(plusClearBtn).toBeVisible();
  });
  test("リセットボタンがあるか", () => {
    render(<App />) as RenderResult;
    const resetBtn = screen.getByTestId("resetBtn");
    expect(resetBtn).toBeVisible();
    expect(resetBtn).toHaveTextContent("Reset");
  });
  test("計算の表示エリアがあるか", () => {
    render(<App />) as RenderResult;
    const mathArea = screen.getByTestId("mathArea");
    expect(mathArea).toBeVisible();
  });
  test("問題数、タイマーエリアがあるか", () => {
    render(<App />) as RenderResult;
    const infoArea = screen.getByTestId("infoArea");
    expect(infoArea).toBeVisible();
    expect(infoArea).toHaveTextContent("問題数");
    expect(infoArea).toHaveTextContent("経過時間");
  });
  test("回答エリアがあるか", () => {
    render(<App />) as RenderResult;
    const answer = screen.getByTestId("answer");
    expect(answer).toBeVisible();
  });
});
